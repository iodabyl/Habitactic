// import { useState } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const[submitted, setSubmitted] = useState(false);
//   return (
//       <section className='section-center'>
//         <h1>Signup form</h1>
//         <div className="underline-1"></div>
//         <form action="https://docs.google.com/forms/d/e/1FAIpQLSdBEvD2eR-kT_j6ntzH7-w02hi7sJPXaqPlc7gl7Wo5_imagQ/formResponse" method='post' >
//           <label htmlFor="entry.1095329638">I am a ...</label><br />
//           <input type="radio" name='entry.1095329638' id='Student' value='Student' required/>
//           <label htmlFor="Student">Student</label><br />
//           <input type="radio" name='entry.1095329638' id='Parent' value='Parent' required/>
//           <label htmlFor="Parent">Parent / Guardian</label><br />
//           <label htmlFor="entry.973547628">Contact Email</label><br />
//           <input type="text" name='entry.973547628' required/><br />
//           <label htmlFor="entry.861641292">Student Name</label><br />
//           <input type="text" name='entry.861641292' required/><br />
//           <label htmlFor="entry.1604522489">Student Grade</label><br />
//           <input type="text" name='entry.1604522489' required/><br />
//           <label htmlFor="entry.292737468">Student School</label><br />
//           <input type="text" name='entry.292737468'/><br />
//           <label htmlFor="entry.1948086649">Parent / Guardian Name</label><br />
//           <input type="text" name='entry.1948086649' required/><br />
//           <label htmlFor="entry.1926137873">Country</label><br />
//           <input type="text" name='entry.1926137873' required/><br />
//           <label htmlFor="entry.747270751">What goals can we help you with?</label><br />
//           <input type="text" name='entry.747270751'/><br />
//           <label htmlFor="entry.1704730680">Questions / Inquiry</label><br />
//           <input type="text" name='entry.1704730680'/><br />
//           <button type='submit'>Submit Form</button>
//         </form>
//         <Link to='/' className='btn btn-primary'>Back to Homepage</Link>
//       </section>
//   );
// }

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import confirmation from './Confirmation';
import { Button, Form, Input, Radio, Space, notification } from 'antd';

const Signup = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const {TextArea} = Input;

  const onFinish = useCallback(
    async ({ email, responder, studentName, studentGrade, studentSchool, parentName, country,  goals, questions}) => {
      try {
        await fetch(
          'https://docs.google.com/forms/d/e/1FAIpQLSdBEvD2eR-kT_j6ntzH7-w02hi7sJPXaqPlc7gl7Wo5_imagQ/formResponse?' +
            new URLSearchParams({
              'entry.1095329638': responder,
              'entry.861641292': studentName ?? '',
              'entry.1604522489': studentGrade ?? '',
              'entry.292737468': studentSchool ?? '',
              'entry.1948086649': parentName ?? '',
              'entry.1926137873': country ?? '',
              'entry.747270751': goals ?? '',
              'entry.1704730680': questions ?? '',
              emailAddress: email,
            }),
          {
            mode: 'no-cors',
          }
        );
        api.success({
          message: 'Submitted successfully',
        });
        form.resetFields();
        history.push("/confirm");
      } catch (e) {
        api.error({
          message: e.message,
        });
      }
    },
    [api, form]
  );

  return (
    <>
      {contextHolder}
      <section className="section">
        <section className="section-center top-4">
          <div className="section-title">
            <h3 className='btm0px'>How can we help you?</h3>
            <div className="underline-2"><span></span></div>
          </div>
          <div className="signup-center">
            <Form
              form={form}
              layout="vertical"
              wrapperCol={{ span: 18 }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Email address is required' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="responder"
                label="I am a ..."
                rules={[{ required: true, message: 'Please select one of the two options' }]}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="Student">Student</Radio>
                    <Radio value="Parent / Guardian">Parent / Guardian</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                name="studentName"
                label="Student Name"
                rules={[{ required: true, message: 'Please enter the name of the student' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="studentGrade"
                label="Student Grade"
                rules={[{ required: true, message: 'Please enter the grade level of the student' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="studentSchool"
                label="Student School"
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="parentName"
                label="Parent / Guardian Name"
                rules={[{ required: true, message: 'Please enter the name of the Parent / Guardian' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="country"
                label="Country"
                rules={[{ required: true, message: 'Please enter the country you live in' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="goals"
                label="What goals can we help you with?"
              >
                <TextArea rows={3}/>
              </Form.Item>
              <Form.Item
                name="questions"
                label="Additional Questions / Inquiries"
              >
                <TextArea rows={3}/>
              </Form.Item>
              <Button className='btn submit' type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </div>
        
        </section>
      </section>
      
    </>
  );
};

export default Signup;
