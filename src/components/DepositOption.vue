<template>
  <div class="deposit-option">
    <div class="deposit-option__coins">
      <img src="assets/img/coin.png" alt="Монетка">
    </div>
    <span class="deposit-option__value">
      ~ {{ countedSum + ' ₽'}}
    </span>
    <p class="deposit-option__text text">
      {{noteText}}
      <button class="deposit-option__btn" type="button" @click="showPopup">?</button>
    </p>
  </div>
</template>

<script>
function removingPopup(item) {
  item.classList.remove('visible')
  item.dataset.popupAction = 'removing'
  item.ontransitionend = () => {
    item.remove()
  }
}

window.addEventListener('click', evt => {
  let popup = document.querySelector('.info-frame__popup')
  if (popup) {
    let idx = parseInt(popup.dataset.popupOrder)
    let btn = document.querySelectorAll('.deposit-option__btn')[idx]
    if (evt.target.closest('div') !== popup && evt.target !== btn && popup) {
      removingPopup(popup)
    }
  }
})

export default {
  props: {
    countedSum: {
      type: Number,
      required: true
    },
    noteText: {
      type: String,
      required: true
    },
    popupText: {
      type: String,
      required: true
    },
    url: {
      type: String
    }
  },
  methods: {
    showPopup(event) {
      let btn = event.target
      let idx = Array.from(document.querySelectorAll('.deposit-option__btn')).indexOf(btn)
      let parent = btn.closest('.wrapper')
      let insertedPopup = parent.querySelector('.info-frame__popup')

      if (insertedPopup) {
        if (parseInt(insertedPopup.dataset.popupOrder) !== idx) {
          removingPopup(insertedPopup)
        }
      }

      if (!insertedPopup || insertedPopup.dataset.popupAction === 'removing') {
        let bottom = parent.getBoundingClientRect().top + parent.offsetHeight - btn.getBoundingClientRect().top
        let left = btn.getBoundingClientRect().left - parent.getBoundingClientRect().left
        let right = parent.getBoundingClientRect().right - btn.getBoundingClientRect().right

        let popup = document.createElement('div')
        if (!idx) {
          popup.innerHTML = `${this.popupText}`
        } else {
          popup.innerHTML = `<a href="${this.url}" target="_blank">${this.popupText}</a>`
        }
        popup.classList.add('info-frame__popup')
        popup.dataset.popupAction = 'prepending'
        setTimeout(() => {
          popup.classList.add('visible')
          popup.ontransitionend = () => {
            popup.removeAttribute('data-popup-action')
          }
        }, 10)

        if (left < 150) {
          popup.style.setProperty('--left', ` ${left - 25 - 5 + btn.offsetWidth/2}px`)
        } else if (left > parent.offsetWidth - 150) {
          popup.style.right = `25px`
          popup.style.setProperty('--right', `${right - 25 - 5 + btn.offsetWidth/2}px`)
        } else {
          popup.style.left = `${left - 150}px`
          popup.style.setProperty('--left', ` ${150 + btn.offsetWidth/2 - 5}px`)
        }
        popup.style.bottom = `${bottom + 15}px`
        popup.style.zIndex = '100'
        popup.dataset.popupOrder = `${idx}`

        parent.prepend(popup)
      }
    },
  },
  mounted() {
    let coinEq = parseFloat(localStorage.getItem('coinEquivalent'))
    let coinsQuantity = Math.ceil(this.countedSum / coinEq)
    let coinsContainer = this.$el.querySelector('.deposit-option__coins')

    if (coinsContainer.children.length !== 1) {
      do {
        coinsContainer.firstChild.remove()
      }
      while (coinsContainer.children.length !== 1)
    }

    for (let i = 1; i < coinsQuantity; i++) {
      let coin = coinsContainer.firstChild.cloneNode()
      coinsContainer.append(coin)
    }

    let coins = coinsContainer.querySelectorAll('img')
    coinsContainer.style.width = `${(coinsQuantity - 1) * 15 + 55}px`
    coins.forEach((el,idx) => {
      el.style.left = `${idx * 15}px`
    })
  }
}
</script>
