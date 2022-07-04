import ButtonStyled from "./ButtonCreate.js";

export default {
  title: "components/ButtonCreate",
  component: ButtonStyled,
  argTypes: { onClick: { action: "onClick" } },
};
const Template = (args) => <ButtonStyled {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Create Game",
};
