
const courseLink = document.querySelector('#courses-page-link')
const courseLinkIcon = document.querySelector('#courses-page-logo')
const accountLink = document.querySelector('#account-page-link')
const accountLinkIcon = document.querySelector('#account-page-logo')
const docLink = window.location.href

if (docLink.includes('account.html')) {
	accountLink.classList.toggle('menu__link_active')
	accountLinkIcon.setAttribute('src', './images/logo_profile_active.svg')
}	else if (docLink.includes('index.html')) {
	courseLink.classList.toggle('menu__link_active')
	courseLinkIcon.setAttribute('src', './images/logo_courses_active.svg')
}

