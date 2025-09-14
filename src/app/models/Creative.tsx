import { ListProps, CreateProps, EditProps, List, Datagrid, TextField, FunctionField, ReferenceField, EditButton, ReferenceInput, AutocompleteInput, DeleteButton, Create, SimpleForm, TextInput, FileInput, FileField, ImageInput, ImageField, Edit } from 'react-admin';

export const CreativeList = (props: ListProps) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <FunctionField label="Size" render={record => `${record.width}x${record.height}`} />
      <ReferenceField source="CampaignId" reference="campaigns">
          <TextField source="name" />
      </ReferenceField>
      <TextField source="preview" />
      <TextField source="backup" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const CreativeCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="campaignId" reference="campaigns">
          <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="width" />
      <TextInput source="height" />
      <FileInput source="file" label="Zip" accept=".zip, .mp4" multiple={false}>
          <FileField source="src" title="title" />
      </FileInput>
      <ImageInput source="backup" label="Backup Image" accept="image/*">
          <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

export const CreativeEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput label="Campaign" source="campaignId" reference="campaigns">
          <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="width" />
      <TextInput source="height" />
      <FileInput source="file" label="Zip" accept=".zip, .mp4" multiple={false}>
          <FileField source="src" title="title" />
      </FileInput>
      <ImageInput source="backup" label="Backup Image" accept="image/*">
          <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export default {
  CreativeList,
  CreativeCreate,
  CreativeEdit,
};