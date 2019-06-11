import React from 'react'
import { Form, Modal } from 'antd'
import InputItem from '../../../components/InputItem'

function TaoMoiPhanTo ({ form, addVisible, setAddVisible, addPhanTo }) {
  return (
    <>
      <Modal
        title='TẠO MỚI PHÂN TỔ'
        visible={addVisible}
        onOk={() => {
          setAddVisible(false)
          form.validateFields((err, values) => {
            if (err) {
              return
            }
            form.resetFields()
            addPhanTo({
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
          <InputItem
            form={form}
            label='Mã phân tổ'
            field='nhomChiTieuId'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Tên phân tổ'
            field='nhomChiTieuId'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
          <InputItem
            form={form}
            label='Nhóm chỉ tiêu'
            field='nhomChiTieuId'
            rules={[
              { required: true, message: 'Vui lòng không để trống thẻ này' }
            ]}
          />
        </Form>
      </Modal>
    </>
  )
}
export default Form.create({ name: 'form_modal' })(TaoMoiPhanTo)
