
import { Story ,Meta} from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

//👇 We create a “template” of how args map to rendering
export default {
    title: 'Components/Button',
    component: ButtonComponent,
  } as Meta;
  
  export const Primary = () => ({
    props: {
      label: 'Boton',
    },
  });