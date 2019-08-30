
// function to remove the selected status
const removeSelectedClass = elClass => {
  const el = document.getElementsByClassName(elClass)
  for(let i = 0; i < el.length; i++) {
    el[i].classList.remove('selected')
  }
}

// function to handle the click event
const handleTabClick = (e) => {
  const clickedTabId = e.target.id
  const clickedTabNum = clickedTabId.split('tab')[1]
  const pageToSelect = `page${clickedTabNum}`

  removeSelectedClass('tab')
  removeSelectedClass('page')

  document.getElementById(pageToSelect).classList.add('selected')
  document.getElementById(clickedTabId).classList.add('selected')
}

// Adding event lisenter to tabs
const selectedTab = document.getElementsByClassName('tab')

for(let i = 0; i < selectedTab.length; i++) {
  selectedTab[i].addEventListener('click', handleTabClick, false)
}

