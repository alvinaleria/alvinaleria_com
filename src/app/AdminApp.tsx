import { Admin, Resource, ListGuesser, EditGuesser, CustomRoutes } from "react-admin";
import { Route } from "react-router";

//Utility
import DataProvider from "../utils/DataProvider";

import Campaign from '../pages/Campaign';
import Creative from '../pages/Creative';
import Preview from '../pages/Preview';
import Test from '../pages/Test';

const AdminApp = () => (
  <Admin dataProvider={DataProvider}>
    <CustomRoutes noLayout>
      <Route path="/preview" element={<Preview />} />
      <Route path="/test" element={<Test />} />
    </CustomRoutes>
    <Resource name="campaigns" {...Campaign} recordRepresentation="name" />
    <Resource name="creatives" {...Creative} recordRepresentation="name" />
  </Admin>
);

export default AdminApp;