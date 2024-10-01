const facebook = document .querySelector('.facebook');
const fbURL = 'https://www.facebook.com/piseth.condid.connection';

const tiktok = document .querySelector('.tiktok');
const ttURL = 'https://www.tiktok.com/@piseth.cc';

const instagram = document .querySelector('.instagram');
const igURL = 'https://www.intagram.com/piseth_cc';

const youtube = document .querySelector('.youtube');
const ytURL = 'https://www.youtube.com/piseth.cc';

const github = document .querySelector('.github');
const ghURL = 'https://www.github.com/pisethcc';

const linkedin = document .querySelector('.linkedin');
const inURL = 'https://www.linkedin.com/in/pisethcc';

facebook .addEventListener ('click', () => {
    window.open(fbURL, '_blank').focus();
});
instagram .addEventListener ('click', () => {
    window.open(igURL, '_blank').focus();
});
tiktok .addEventListener ('click', () => {
    window.open(ttURL, '_blank').focus();
});
youtube .addEventListener ('click', () => {
    window.open(ytURL, '_blank').focus();
});
github .addEventListener ('click', () => {
    window.open(ghURL, '_blank').focus();
});
linkedin .addEventListener ('click', () => {
    window.open(inURL, '_blank').focus();
});