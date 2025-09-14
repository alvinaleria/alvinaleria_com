import { ListProps, CreateProps, EditProps, List, Datagrid, TextField, EditButton, DeleteButton, Create, SimpleForm, TextInput, Edit } from 'react-admin';

export const CampaignList = (props: ListProps) => (
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

export const CampaignCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="desc" />
      <TextInput source="zip" />
      <TextInput source="zsize" />
    </SimpleForm>
  </Create>
);

export const CampaignEdit = (props: EditProps) => (
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
