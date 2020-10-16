<template>
  <svg width="0" height="0" class="cp sprite">
  <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 70" id="success">
    <g filter="url(#filter0_d)">
      <path d="M27.782 61.115c-15.52-1.49-22.16-10.85-22.98-19.85-1.13-12.56 4.56-34.94 28.01-36.14 16.16-.83 29.44 11.64 28.47 30.69-.83 16.39-15.21 27.06-33.5 25.3z" fill="#08C"></path>
      <path d="M48.252 33.305s-9-4.02-11.33-7.35c-2.39-3.41-5.35-9.06-5.91-12.74-.56-3.68-2.52-3.55-3.65-.61s.06 16.76.06 16.76-7.98-1.01-9.53.63c-1.55 1.64 0 4.92 0 4.92s-3.13 1.97-3.45 3.84c-.32 1.87 1.45 4.7 1.45 4.7s-2.88 1.45-2.24 3.11c.64 1.66 2.02 3.4 2.02 3.4s-1.8.6-1.7 2.49c.1 1.89 10.79 3.32 15.17 2.71 4.38-.61 17.89-1.64 17.89-1.64l1.22-20.22z" fill="#FF796D" stroke="#fff" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M18.482 12.635s5.02-.17 5.74.39m-2.87-6.44s3.22.91 4.41 2.82m2.57-2.12s-.76-2.78-.49-4.59" stroke="#FFC236" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M47.682 31.046h6.08v23.66l-8.33.61 2.25-24.27z" fill="#000"></path>
      <path d="M50.632 36.115a1.46 1.46 0 100-2.92 1.46 1.46 0 000 2.92z" fill="#FFC236"></path>
    </g>
    <defs>
      <filter id="filter0_d" x="-3" y="0" width="72" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
      </filter>
    </defs>
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="logo">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2507 6.65376C10.6011 6.24054 11.1315 6 11.6923 6H36.3077C36.8685 6 37.3989 6.24054 37.7493 6.65376L47.5954 18.2667C48.1831 18.9598 48.1244 19.9589 47.4593 20.5866L25.3054 41.4898C24.5845 42.1701 23.4155 42.1701 22.6946 41.4898L0.540739 20.5866C-0.124441 19.9589 -0.183092 18.9598 0.404563 18.2667L10.2507 6.65376ZM11.0667 11.2683L13.4682 17.6129H5.68732L11.0667 11.2683ZM6.30317 21.0968L19.5001 33.5487L14.7869 21.0968H6.30317ZM18.7076 21.0968L24 35.0789L29.2924 21.0968H18.7076ZM33.2131 21.0968L28.4999 33.5487L41.6968 21.0968H33.2131ZM42.3127 17.6129H34.5318L36.9333 11.2683L42.3127 17.6129ZM33.688 9.48387H27.3815L31.4357 15.4343L33.688 9.48387ZM28.5305 17.6129L24 10.9632L19.4694 17.6129H28.5305ZM16.5643 15.4343L20.6185 9.48387H14.312L16.5643 15.4343Z" />
  </symbol>
</svg>
</template>

<script lang="ts">
import Base from '@/mixins/BaseMixin'
import { Component, Mixins } from 'vue-property-decorator'

@Component
export default class SvgSprite extends Mixins(Base) {}
</script>