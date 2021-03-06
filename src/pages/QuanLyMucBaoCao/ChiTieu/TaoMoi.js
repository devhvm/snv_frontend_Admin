import React from 'react'
import { Form, Modal, Select } from 'antd'
import InputItem from '../../../components/InputItem'

function TaoMoiChiTieu ({ form, addVisible, setAddVisible, addChiTieu }) {
  // const statusList = [
  //   {
  //     value: 'PUBLISH'
  //   },
  //   {
  //     value: 'UNPUBLISH'
  //   },
  //   {
  //     value: 'DELETE'
  //   }
  // ]

  return (
    <>
      <Modal
        title='TẠO MỚI CHỈ TIÊU'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addChiTieu({
              nhomChiTieuId: values.nhomChiTieuId,
              chiTieuCode: values.chiTieuCode,
              name: values.name,
              status: values.status
            })
          })
        }}
        onCancel={() => {
          setAddVisible(false)
        }}
      >
        <Form>
          {/* <InputItem */}
          {/* form={form} */}
          {/* label='Mã nhóm chỉ tiêu' */}
          {/* field='nhomChiTieuId' */}
          {/* rules={[ */}
          {/* { required: true, message: 'Vui lòng không để trống thẻ này' } */}
          {/* ]} */}
          {/* /> */}
          <InputItem
            form={form}
            label='Mã chỉ tiêu'
            field='chiTieuCode'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên chỉ tiêu'
            field='name'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          {/* <InputItem */}
          {/* form={form} */}
          {/* label='Status' */}
          {/* field='status' */}
          {/* type='select' */}
          {/* options={ */}
          {/* statusList && */}
          {/* statusList.map((item, index) => ( */}
          {/* <Select.Option key={index} value={item.value}> */}
          {/* {item.value} */}
          {/* </Select.Option> */}
          {/* )) */}
          {/**/}
          {/* } */}
          {/* rules={[ */}
          {/* { required: true, message: 'Vui lòng không để trống thẻ này' } */}
          {/* ]} */}
          {/* /> */}
          <Form.Item label='Đơn vị chủ quản'>
            <Select defaultValue='1' style={{ width: '100%' }}>
              <Select.Option value='1'>
                Bộ Kế hoạch và Đầu tư (Tổng cục Thống kê)
              </Select.Option>
              <Select.Option value='2'>
                Bộ Lao động - Thương binh và Xã hội
              </Select.Option>
              <Select.Option value='3'>Tòa án nhân dân tối cao</Select.Option>
            </Select>
          </Form.Item>
          <InputItem
            form={form}
            label='Kỳ công bố'
            field='kyCongBo'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
        </Form>
      </Modal>
    </>
  )
}
export default Form.create({ name: 'form_modal' })(TaoMoiChiTieu)
