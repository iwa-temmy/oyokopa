const trigger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

function openNavigation() {
  if (navigation.style.display == "none" || navigation.style.display == '') {
    navigation.style.display = 'block';
  } else if (navigation.style.display === "block") {
    navigation.style.display = 'none';
  } else {
    navigation.style.display === "none"
  }
}