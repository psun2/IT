// const actionsBtn = document.querySelector(
//   '.metadata .metadata__actions .metadata__actions-item .actionsBtn',
// );
// const action__icon = document.querySelector(
//   '.metadata .metadata__actions .metadata__actions-item .actionsBtn i',
// );
// const action__title = document.querySelector(
//   '.metadata .metadata__actions .metadata__actions-item .actionsBtn span',
// );
// actionsBtn.addEventListener('click', () => {
//   action__icon.classList.toggle('active');
//   action__title.classList.toggle('active');
// });

// const actionsBtnb = document.querySelector(
//   '.metadata .metadata__actions > :nth-child(2) .actionsBtn',
// );
// const action__iconb = document.querySelector(
//   '.metadata .metadata__actions > :nth-child(2) .actionsBtn i',
// );
// const action__titleb = document.querySelector(
//   '.metadata .metadata__actions > :nth-child(2) .actionsBtn span',
// );

// actionsBtnb.addEventListener('click', () => {
//   action__iconb.classList.toggle('active');
//   action__titleb.classList.toggle('active');
// });

// document.querySelector();

// TODO: actions button

const actionsBtn = [
  '.metadata .metadata__actions .metadata__actions-item .actionsBtn',
  '.metadata .metadata__actions > :nth-child(2) .actionsBtn',
  '.metadata .metadata__actions > :nth-child(3) .actionsBtn',
  '.metadata .metadata__actions > :nth-child(4) .actionsBtn',
  '.metadata .metadata__actions > :nth-child(5) .actionsBtn',
];

const action__icon = [
  '.metadata .metadata__actions .metadata__actions-item .actionsBtn i',
  '.metadata .metadata__actions > :nth-child(2) .actionsBtn i',
  '.metadata .metadata__actions > :nth-child(3) .actionsBtn i',
  '.metadata .metadata__actions > :nth-child(4) .actionsBtn i',
  '.metadata .metadata__actions > :nth-child(5) .actionsBtn i',
];

const action__title = [
  '.metadata .metadata__actions .metadata__actions-item .actionsBtn span',
  '.metadata .metadata__actions > :nth-child(2) .actionsBtn span',
  '.metadata .metadata__actions > :nth-child(3) .actionsBtn span',
  '.metadata .metadata__actions > :nth-child(4) .actionsBtn span',
  '.metadata .metadata__actions > :nth-child(5) .actionsBtn span',
];

document.querySelector(actionsBtn[0]).addEventListener('click', () => {
  document.querySelector(action__icon[0]).classList.toggle('active');
  document.querySelector(action__title[0]).classList.toggle('active');
});

document.querySelector(actionsBtn[1]).addEventListener('click', () => {
  document.querySelector(action__icon[1]).classList.toggle('active');
  document.querySelector(action__title[1]).classList.toggle('active');
});

document.querySelector(actionsBtn[2]).addEventListener('click', () => {
  document.querySelector(action__icon[2]).classList.toggle('active');
  document.querySelector(action__title[2]).classList.toggle('active');
});

document.querySelector(actionsBtn[3]).addEventListener('click', () => {
  document.querySelector(action__icon[3]).classList.toggle('active');
  document.querySelector(action__title[3]).classList.toggle('active');
});

document.querySelector(actionsBtn[4]).addEventListener('click', () => {
  document.querySelector(action__icon[4]).classList.toggle('active');
  document.querySelector(action__title[4]).classList.toggle('active');
});

// TODO: metadata more button
const infoBtn = document.querySelector('.metadata .metadata__infoBtn');
const info = document.querySelector('.metadata .metadata__info');
const icon = document.querySelector('.metadata .metadata__infoBtn i');

infoBtn.addEventListener('click', () => {
  info.classList.toggle('clamp');
  icon.classList.toggle('active');
});

// TODO: UP Next More

// const moreBtn = document.querySelector(
//   '.upnext .upnext__list .upnext__list-item .upnext__moreBtn',
// );
// const meta = document.querySelector(
//   '.upnext .upnext__list .upnext__list-item .upnext__metadata .upnext__meta',
// );

const moreBtn = [
  '.upnext .upnext__list > :first-child .upnext__moreBtn',
  '.upnext .upnext__list > :nth-child(2) .upnext__moreBtn',
  '.upnext .upnext__list > :last-child .upnext__moreBtn',
];
const meta = [
  '.upnext .upnext__list > :first-child .upnext__metadata .upnext__meta',
  '.upnext .upnext__list > :nth-child(2) .upnext__metadata .upnext__meta',
  '.upnext .upnext__list > :last-child .upnext__metadata .upnext__meta',
];

// moreBtn.addEventListener('click', () => {
//   meta.classList.toggle('active');
// });

document.querySelector(moreBtn[0]).addEventListener('click', () => {
  document.querySelector(meta[0]).classList.toggle('active');
});
document.querySelector(moreBtn[1]).addEventListener('click', () => {
  document.querySelector(meta[1]).classList.toggle('active');
});
document.querySelector(moreBtn[2]).addEventListener('click', () => {
  document.querySelector(meta[2]).classList.toggle('active');
});
