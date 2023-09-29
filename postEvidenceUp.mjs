import FormData from 'form-data';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config()

async function postEvidence() {
    try {
        const form = new FormData();
        form.append('name','Security Training');
        form.append('renewalDate','2023-07-06');
        form.append('renewalScheduleType','ONE_YEAR');
        form.append('source','S3_FILE');
        form.append('filedAt','2022-07-06');
        form.append('ownerId','1');
        form.append('controlIds','1,2,3');

        // Add your file here. If the file exists in the same directory as this script, add only the file name. Else, add the file path.
        const file = fs.createReadStream('diagram.png');
        form.append('file', file);

        // CONTROL ID found using Control record
        //const id = 147;

        // WORKSPACE ID default value is 1, unless you have multiple Workspaces enabled
        const workspaceId = 1;

        const resp = await fetch(
            `https://public-api.drata.com/public/workspaces/${workspaceId}/evidence-library`,
            {
            method: 'POST',
            headers: {
                Authorization: `Bearer <token>`
            },
            body: form
            }
        );

        const data = await resp.text();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

postEvidence();