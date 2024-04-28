import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonFooter,
  IonText,
} from '@ionic/react';
import { camera, videocam, albums, notifications, chatbox, person } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr></hr>
        <IonToolbar>
          <IonButton color="light" className="circular-button" slot="end">
            <IonIcon icon={chatbox} />
          </IonButton>
          <IonButton color="light" className="circular-button" slot="end">
            <IonIcon icon={notifications} />
          </IonButton>
          <IonButton color="light" className="circular-button" slot="end">
            <IonIcon icon={person} />
            {/* <img src="../src/assets/img/ARSY_CIRCLE_GREEN_PNG.png" id="profile" alt="profile" /> */}
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonFooter>

          <IonToolbar color="success">
            <IonText style={{ textAlign: 'center' }}>
              I am Mary Chris Sy and this is my Home page
            </IonText>

          </IonToolbar>

        </IonFooter>

      </IonContent>
    </IonPage>
  );
};

export default Home;