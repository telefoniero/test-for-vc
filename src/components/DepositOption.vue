<template>
  <div class="deposit-option">
    <div class="deposit-option__coins">
    </div>
    <span class="deposit-option__value">
      ~ {{ countedSum + ' ₽'}}
    </span>
    <p class="deposit-option__text text">
      {{noteText}}
      <button class="deposit-option__btn" type="button" @click="test">?</button>
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
    if (evt.target.closest('div') !== popup && evt.target !== btn && popup && popup.dataset.popupAction !== 'prepending' ) {
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
    test(event) {
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
        popup.dataset.popupOrder = `${idx}`

        parent.prepend(popup)
      }
    }
  }
}
</script>
