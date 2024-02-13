import {Button} from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button text="Click Me" onClick={() => {}} />;

export const Primary = () => (
  <Button text="Click Me" onClick={() => {}} type="primary" />
);

export const Secondary = () => (
  <Button text="Click Me" onClick={() => {}} type="secondary" />
);

export const Tertiary = () => (
  <Button text="Click Me" onClick={() => {}} type="tertiary" />
);

export const Text = () => (
    <Button text="Click Me" onClick={() => {}} type="text" />
  );


