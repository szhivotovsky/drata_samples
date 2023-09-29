import FormData from 'form-data';
import fetch from 'node-fetch';


async function run() {
    const form = new FormData();
    form.append('name','Okta User List');
    form.append('description','Okta User list for Reviews');
    form.append('renewalDate','2021-07-06');
    form.append('renewalScheduleType','ONE_YEAR');
    form.append('source','URL');
    form.append('filedAt','2020-07-06');
    form.append('ownerId','1');
    form.append('controlIds','1,2');
    form.append('url','https://<s3_bucket_name>.s3.us-west-2.amazonaws.com/users.txt');

    const workspaceId = '1';
    const resp = await fetch(
      `https://public-api.drata.com/public/workspaces/${workspaceId}/evidence-library`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer <token>'
        },
        body: form
      }
    );

    const data = await resp.text();
    console.log(data);
  }

  run();