import { Admin, Resource, ListGuesser, EditGuesser, CustomRoutes } from "react-admin";
import { Route } from "react-router";

//Utility
import DataProvider from "../utils/DataProvider";

import { CampaignList, CampaignCreate, CampaignEdit } from '../models/Campaign';
import { CreativeList, CreativeCreate, CreativeEdit } from '../models/Creative';
import Preview from '../pages/Preview';
import Test from '../pages/Test';

const AdminApp = () => (
  <Admin dataProvider={DataProvider}>
    <CustomRoutes noLayout>
      <Route path="/preview" element={<Preview />} />
      <Route path="/test" element={<Test />} />
    </CustomRoutes>
    <Resource name="campaigns" list={CampaignList} create={CampaignCreate} edit={CampaignEdit} recordRepresentation="name" />
    <Resource name="creatives" list={CreativeList} create={CreativeCreate} edit={CreativeEdit} recordRepresentation="name" />
  </Admin>
);

export default AdminApp;