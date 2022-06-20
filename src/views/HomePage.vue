<template>
  <ion-page>
    
    <ion-header>
      <ion-toolbar>
        <ion-title>NFC Header</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-button @click="Read()">LER</ion-button>
            </ion-col>
            <ion-col size="12">
              <ion-text>ID: {{id}}</ion-text>
            </ion-col>
            <ion-col size="12">
              <ion-button @click="Share()">Share</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { NFC, Ndef } from "@awesome-cordova-plugins/nfc"
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup(){

    const nfc = ref(NFC);
    const id = ref<number[]>([]);

    function Read(){
      
      let flags = nfc.value.FLAG_READER_NFC_A | nfc.value.FLAG_READER_NFC_V;
      nfc.value.readerMode(flags).subscribe(
        tag => {
          alert("Leu");
          id.value = tag.id!;
        },
        err => alert(JSON.stringify(err))
      )

    }

    function Share(){
      var teste = Ndef.textRecord("", undefined, id.value)
      nfc.value.share([teste])
    }

    return{
      id,
      Read,
      Share
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
