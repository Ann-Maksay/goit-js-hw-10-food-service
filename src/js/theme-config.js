const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBoxRef = document.querySelector('#theme-switch-toggle');

onStart();

checkBoxRef.addEventListener('change', changeThemeCheckBox);

function changeThemeCheckBox() {
    console.log(localStorage.getItem('theme'));

    if (localStorage.getItem('theme') === Theme.LIGHT) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function onStart() {
    if (localStorage.getItem('theme') === Theme.DARK) {
        document.body.classList.add(Theme.DARK);
        checkBoxRef.checked = true;
    } else {
        document.body.classList.add(Theme.LIGHT);
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', Theme.LIGHT);
        }
    }
}