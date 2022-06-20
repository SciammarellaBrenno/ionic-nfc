import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue, IonPage, IonHeader, IonButtons, IonButton, IonToolbar, IonBackButton, IonContent, IonGrid, IonCol, IonRow, IonInput, IonText, IonLabel, IonItem, IonList, 
  IonFooter, IonMenu, IonTitle, IonSelectOption, IonSelect, IonDatetime, IonSlide, IonSlides, IonAvatar, IonChip, IonThumbnail, IonMenuButton, IonCard, IonCardContent, 
    IonCardHeader, IonRefresher, IonRefresherContent, IonItemSliding, IonItemOptions, IonItemOption, IonImg, IonPopover, IonProgressBar, IonToggle } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

//Importação dos componentes do Ionic
app.component('ion-page', IonPage);
app.component('ion-img', IonImg);
app.component('ion-popover', IonPopover);
app.component('ion-progress-bar', IonProgressBar);
app.component('ion-header', IonHeader);
app.component('ion-buttons', IonButtons);
app.component('ion-button', IonButton);
app.component('ion-toolbar', IonToolbar);
app.component('ion-back-button', IonBackButton);
app.component('ion-content', IonContent);
app.component('ion-grid', IonGrid);
app.component('ion-col', IonCol);
app.component('ion-row', IonRow);
app.component('ion-input', IonInput);
app.component('ion-text', IonText);
app.component('ion-label', IonLabel);
app.component('ion-item', IonItem);
app.component('ion-list', IonList);
app.component('ion-footer', IonFooter);
app.component('ion-menu', IonMenu);
app.component('ion-title', IonTitle);
app.component('ion-select-option', IonSelectOption);
app.component('ion-select', IonSelect);
app.component('ion-datetime', IonDatetime);
app.component('ion-slide', IonSlide);
app.component('ion-slides', IonSlides);
app.component('ion-avatar', IonAvatar);
app.component('ion-chip', IonChip);
app.component('ion-thumbnail', IonThumbnail);
app.component('ion-menu-button', IonMenuButton);
app.component('ion-card', IonCard);
app.component('ion-card-content', IonCardContent);
app.component('ion-card-header', IonCardHeader);
app.component('ion-refresher', IonRefresher);
app.component('ion-refresher-content', IonRefresherContent);
app.component('ion-item-sliding', IonItemSliding);
app.component('ion-item-options', IonItemOptions);
app.component('ion-item-option', IonItemOption);
app.component('ion-toggle', IonToggle);

router.isReady().then(() => {
  app.mount('#app');
});