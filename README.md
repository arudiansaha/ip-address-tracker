# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

- [Mobile](./screenshots/mobile.png)
- [Desktop](./screenshots/desktop.png)

### Links

- Solution URL: [Click me.](https://github.com/arudiansaha/ip-address-tracker)
- Live Site URL: [Click me.](https://ip-address-tracker-nine-sage.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Modules
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - JS library

### What I learned

I learned a lot about how to use API, and how API works.

```html
<form className="{styles.search}">
  <input
    type="text"
    className="{styles.input}"
    placeholder="Search for any IP address or domain"
    value="{value}"
    onChange="{onChange}"
  />
  <button type="submit" className="{styles.submit}" onClick="{onClick}">
    Search
  </button>
</form>
```

```css
.search {
  display: flex;
  align-items: center;
  width: min(100% - 3rem, 38rem);
  margin-inline: auto;
}
```

```js
function LocationMarker({ latitude, longitude }: Props) {
  const map = useMap();
  map.flyTo([latitude, longitude], 15);

  const icon = L.icon({
    iconUrl: 'src/assets/images/icon-location.svg',
    iconSize: [41, 47],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  return (
    <Marker position={[latitude, longitude]} icon={icon}>
      <Popup>Found it!</Popup>
    </Marker>
  );
}
```

### Continued development

Make easier to read the code and make it better performance.

### Useful resources

- [React Leaflet Examples](https://react-leaflet.js.org/docs/example-popup-marker/) - Easy documentation and awesome tool for leaflet.
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/) - Help you to understand type on react.
- [CSS Reset from Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/) - Help you to reset css.

## Author

- Website - [Blog](https://blog-arudiansaha.vercel.app)
- Frontend Mentor - [@arudiansaha](https://www.frontendmentor.io/profile/arudiansaha)
- Twitter - [@arudiansaha](https://www.twitter.com/arudiansaha)
- LinkedIn - [Rizky Ardiansyah](https://linkedin.com/in/ky-ardiansyah)

## Acknowledgments

### Big Thanks

- [StackOverflow](https://stackoverflow.com/) - An Angel ;).
