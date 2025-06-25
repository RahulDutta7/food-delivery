import React from "react";
import "./RestaurantMenuScreen.scss";
import { IonContent, IonPage } from "@ionic/react";
import MenuCard from "../components/menuComponents/MenuCard";
const RestaurantMenuScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent  fullscreen>
        <div className="restaurant_menu_screen">
          <div className="menu_header">
            <div className="title">Lorem, ipsum dolor.</div>
          </div>
          <div className="menu_body">
            <div className="menu_card_section">
                <MenuCard/>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RestaurantMenuScreen;
