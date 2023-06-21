import { createChatBotMessage } from 'react-chatbot-kit';
import GeneralOptions from '../widgetsBot/Overview';
import Card from '../widgetsBot/Card';
import Redes from '../widgetsBot/Redes';
import Opiniones from '../widgetsBot/Opiniones';
import Planes from '../widgetsBot/Planes';
import AdquirirPlan from '../widgetsBot/AdquirirPlan';
import Suplementos from '../widgetsBot/Suplementos';
import AdquirirSuplemento from '../widgetsBot/AdquirirSuplemento';
import Entrenador from '../widgetsBot/Entrenador';
const botName = "Gym Chat"

const config = {
  initialMessages: [
    createChatBotMessage(`Hola, ¿En que te puedo ayudar?`),
     createChatBotMessage(
      "¡Aquí hay algunas opciones las cuales puedes escoger!",
      {
        withAvatar: false,
        delay: 500,
        widget:"overview"
      }
    ),
  ],
  state:{},
  botName: botName,
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props) => GeneralOptions(props),
      mapStateToProps: ['messages'],
    },
    {
      widgetName: "redes",
      widgetFunc: (props) => Redes(props),
    },
    {
      widgetName: "reseñas",
      widgetFunc: (props) => Opiniones(props),
    },
    {
      widgetName: "planes",
      widgetFunc: (props) => Planes(props),
    },
    {
      widgetName: "adquirirPlan",
      widgetFunc: (props) => AdquirirPlan(props),
    },
    {
      widgetName: "suplementos",
      widgetFunc: (props) => Suplementos(props),
    },
     {
      widgetName: "adquirirSuplemento",
      widgetFunc: (props) => AdquirirSuplemento(props),
    },
     {
      widgetName: "entrenadores",
      widgetFunc: (props) => Entrenador(props),
    },
  ]
};

export default config;