import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import {
    Form,
    Field,
    CellGroup,
    Button,
    RadioGroup,
    Radio,
    Area,
    Popup,
    Checkbox,
    CheckboxGroup,
    Loading,
    Picker,
    DatetimePicker,
    Circle,
    Progress,
} from 'vant';

createApp(App).use(store).use(router)
    .use(Form).use(Field).use(Button).use(CellGroup).use(Area).use(Loading).use(RadioGroup).use(Radio)
    .use(Popup).use(Checkbox).use(CheckboxGroup).use(Picker).use(DatetimePicker).use(Circle).use(Progress)
    .mount('#app')