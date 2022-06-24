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
              <ion-button @click="ReadNdef()">LER NDEF</ion-button>
              <ion-button @click="ReadNdef()">LER TAG</ion-button>
            </ion-col>
            <ion-col size="12">
              <ion-text>Valor: {{valor}}</ion-text>
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
/* eslint-disable */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc';
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
    const tags = ref<any[]>([]);

    const valor = ref("");

    function ReadNdef(){
      nfc.value.addNdefListener (
        function () {},
        function (error: any) { // error callback
          alert("Error adding NDEF listener " + JSON.stringify(error));
        }
      ).subscribe(nfcEvent => {
        var tag = nfcEvent.tag;
        var ndefMessage = tag.ndefMessage;

        alert(JSON.stringify(tag));
        valor.value = nfc.value.bytesToString(ndefMessage[0].payload).substring(3);
        alert(nfc.value.bytesToString(ndefMessage[0].payload).substring(3));
      });
    }

    function ReadTag(){
      nfc.value.addTagDiscoveredListener (
        function () {},
        function (error: any) { // error callback
          alert("Error adding NDEF listener " + JSON.stringify(error));
        }
      ).subscribe(nfcEvent => {
        var tag = nfcEvent.tag;
        
        alert(JSON.stringify(tag));
      });
    }

    function Share(){
      var teste = [
        Ndef.uriRecord(valor.value.toString())
      ]
      nfc.value.share(teste).then(
        res => {
          alert(JSON.stringify(res))
        },
        err => {
          alert(JSON.stringify(err))
        }
      )
    }

    return{
      tags,
      valor,
      ReadNdef,
      ReadTag,
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
