<template>
<div class="container">
  <div class="website">
    <div class="navbar">
      <img src="/logo.png" alt="" class="logo">
      <div class="mail">
        ventas@digitalascent.mx
      </div>
    </div>
    <div class="image-container">
      <img src="/Hi.png" alt="" class="image">
    </div>
    <div class="text-container">
      <div class="text">
        Reunimos a los mejores expertos en marketing y tecnologías para ayudarte a hacer crecer tu negocio. 
        <div class="call-to-action">
          ¿Quieres saber más?
        </div>
        <a href="mailto:ventas@digitalascent.mx" class="action">
          <img src="/arrow.svg" alt="" class="icon"> Contáctanos
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hola'
  }
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
  font-family: 'PlusJakartaSans';
  src: url('../assets/PlusJakartaSans-Bold.woff2') format('woff2'),
       url('../assets/PlusJakartaSans-Bold.woff') format('woff'),
       url('../assets/PlusJakartaSans-Bold.ttf') format('truetype');
  font-weight: bold;
}
@font-face {
  font-family: 'PlusJakartaSans';
  src: url('../assets/PlusJakartaSans-Medium.woff2') format('woff2'),
       url('../assets/PlusJakartaSans-Medium.woff') format('woff'),
       url('../assets/PlusJakartaSans-Medium.ttf') format('truetype');
  font-weight: regular;
}
body {
  font-family: 'PlusJakartaSans';
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}
.website {
  width: 1100px;
  max-width: 98%;
}
.navbar {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mail {
  font-weight: bold;
}
.logo {
  height: 40px;
}
.image-container {
  margin-top: -50px;
  padding: 0 20px;
}
.image {
  width: 100%;
}
.text-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.text {
  width: 50%;
  max-width: 50%;
  padding-right: 120px;
  line-height: 1.5;
}
.call-to-action {
  line-height: 1.5;
  font-weight: bold;
}
.action {
  background-color: rgb(221, 221, 221);
  color: black;
  width: min-content;
  padding: 14px 30px;
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.icon {
  height: 16px;
  width: auto;
  margin-right: 10px;
}
</style>
