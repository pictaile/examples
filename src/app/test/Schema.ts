import {CompOneComponent} from "../dynamic/comp-one/comp-one.component";
import {CompTwoComponent} from "../dynamic/comp-two/comp-two.component";

export const Schema = {
  components: [
    {
      component: CompOneComponent,
      data: {
        element: 'element',
        dashboard: 'dashboard',
      }
    },
    {
      component: CompTwoComponent,
      data: {
        element: 'element',
        sokBonus: false,
      }
    }
  ]
};
