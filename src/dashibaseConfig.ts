import { Page, Attribute, AttributeType, Config, Trigger } from './utils/config';

// Change this to build your own dashboard - see `utils/config.ts` for documentation

const DASHIBASE_CONFIG: Config = {
  name: 'My Dashboard',
  supabase_url: 'https://jbwalhwyvyttpxbjwmsc.supabase.co',
  supabase_anon_key:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impid2FsaHd5dnl0dHB4Ymp3bXNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2OTA4MTEsImV4cCI6MTk4OTI2NjgxMX0.wcfkvGJWio911LRUmz4eHzmp6NM5yxxe36ARnLit7Q8',
  pages: [
    {
      name: 'My Page',
      page_id: 'my_page',
      table_id: 'my_table',
      mode: 'list',
      attributes: [
        {
          id: 'value',
          label: 'Value',
          required: false,
          readonly: false,
          type: AttributeType.Text,
        },
        {
          // Enum example - this will generate a dropdown with the provided options
          id: 'foo',
          label: 'Foo',
          required: false,
          readonly: false,
          type: AttributeType.Enum,
          enumOptions: ['foo', 'bar'], // Specify enum options
        },
        {
          // Join example - for showing joined data from other tables
          // This will also work with tables joined via join tables
          // TODO: Add clearer documentation and examples
          id: 'foreign_table(foreign_table_col)',
          label: 'Join Example',
          required: false,
          readonly: false,
          type: AttributeType.Join,
        },
      ] as Attribute[],
      // Trigger example - for adding custom actions to the page
      // See config.ts for more details
      // TODO: Add clearer documentation and examples
      triggers: [
        {
          label: 'My Action',
          code: 'alert(user.email)',
        },
      ] as Trigger[],
    },
  ] as Page[],
};

export default DASHIBASE_CONFIG;
