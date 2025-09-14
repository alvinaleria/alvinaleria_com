
import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('/api');

const DataProvider = {
  ...dataProvider,
  create: async (resource: string, params: any) => {
    let fileUrl = null;

    if (resource === 'creatives') {
        const formData = new FormData();
        formData.append('name', params.data.name);
        formData.append('width', params.data.width);
        formData.append('height', params.data.height);
        formData.append('campaignId', params.data.campaignId);

        if (params.data.file?.rawFile) 
            formData.append('file', params.data.file.rawFile);
        if (params.data.backup?.rawFile) 
            formData.append('backup', params.data.backup.rawFile);

        const uploadRes = await fetch('/api/creatives', {
            method: 'POST',
            body: formData,
        });

        const uploadJson = await uploadRes.json();
        fileUrl = uploadJson.url;
        return { data: uploadJson };
    } else {
      const payload = {
        ...params.data,
        fileUrl,
      };

      const res = await fetch(`/api/${resource}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      return { data: json };
    }
  },
  update: async (resource: string, params: any) => {
    let fileUrl = null;

    if (resource === 'creatives') {
        const formData = new FormData();
        formData.append('name', params.data.name);
        formData.append('width', params.data.width);
        formData.append('height', params.data.height);
        formData.append('CampaignId', params.data.CampaignId);

        if (params.data.file?.rawFile) 
            formData.append('file', params.data.file.rawFile);
        if (params.data.backup?.rawFile) 
            formData.append('backup', params.data.backup.rawFile);

        const uploadRes = await fetch('/api/creatives', {
            method: 'POST',
            body: formData,
        });

        const uploadJson = await uploadRes.json();
        fileUrl = uploadJson.url;
        return { data: uploadJson };
    } else {
      const payload = {
        ...params.data,
        fileUrl,
      };

      const res = await fetch(`/api/${resource}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      return { data: json };
    }
  }

  // Implement other methods as needed (getList, update, etc.)
};

export default DataProvider;
