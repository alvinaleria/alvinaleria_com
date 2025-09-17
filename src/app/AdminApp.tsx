import { Admin, Resource, ListGuesser, EditGuesser, CustomRoutes } from "react-admin";
import { Route } from "react-router";

//Utility
import DataProvider from "../utils/DataProvider";

//Layout
import SmartLayout from '../layout/SmartLayout';
import DefaultLayout from '../layout/DefaultLayout';

import { CampaignList, CampaignCreate, CampaignEdit } from '../models/Campaign';
import { CreativeList, CreativeCreate, CreativeEdit } from '../models/Creative';
import Landing from '../pages/Landing';
import Test from '../pages/Test';

const AdminApp = () => (
  <Admin dashboard={Landing} layout={SmartLayout} dataProvider={DataProvider}>
    <CustomRoutes noLayout>
      <Route path="/admin" element={<DefaultLayout />} />
      <Route path="/test" element={<Test />} />
    </CustomRoutes>
    <Resource name="campaigns" list={CampaignList} create={CampaignCreate} edit={CampaignEdit} recordRepresentation="name" />
    <Resource name="creatives" list={CreativeList} create={CreativeCreate} edit={CreativeEdit} recordRepresentation="name" />
  </Admin>
);

export default AdminApp;