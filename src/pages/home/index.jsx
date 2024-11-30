import React from 'react';
import { Button, Input, Card, DatePicker, Checkbox, Table, Tag, Radio, Switch, Alert } from 'antd';

const Home = () => {
  const columns = [
    {
      title: 'Ism',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Yosh',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Holati',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color="blue">{status}</Tag>,
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Ali',
      age: 25,
      status: 'Faol',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ant Design bilan amaliyot</h1>

      <Button type="primary" style={{ marginBottom: '10px' }}>
        Asosiy Tugma
      </Button>
      
      <Input placeholder="Matn kiriting" style={{ marginBottom: '10px' }} />
      
      <Card title="Ant Design Card" style={{ marginBottom: '10px' }}>
        Bu Ant Design kartasi.
      </Card>
      
      <DatePicker style={{ marginBottom: '10px' }} />
      
      <Checkbox style={{ marginBottom: '10px' }}>Tasdiqlash</Checkbox>
      
      <Table columns={columns} dataSource={data} style={{ marginBottom: '10px' }} />
      
      <Radio.Group style={{ marginBottom: '10px' }}>
        <Radio value={1}>Tanlov 1</Radio>
        <Radio value={2}>Tanlov 2</Radio>
      </Radio.Group>
      
      <Switch style={{ marginBottom: '10px' }} />
      
      <Alert message="Bu ogohlantirish xabari" type="info" showIcon style={{ marginBottom: '10px' }} />
    </div>
  );
};

export default Home;
