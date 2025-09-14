import { List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, Edit } from 'react-admin';

export const CampaignList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="desc" />
      <TextField source="zip" />
      <TextField source="zsize" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CampaignCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="desc" />
      <TextInput source="zip" />
      <TextInput source="zsize" />
    </SimpleForm>
  </Create>
);

export const CampaignEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="desc" />
      <TextInput source="zip" />
      <TextInput source="zsize" />
    </SimpleForm>
  </Edit>
);

export default {
  CampaignList,
  CampaignCreate,
  CampaignEdit,
};
