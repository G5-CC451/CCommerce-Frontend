import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
// Context
import { VoiceContext } from '@/context/voice-context'
// Components
import { Layout, Space, Modal, Row, Col } from 'antd'
import Search from '@/components/molecules/forms/Search'
// Assets
import {
  ShoppingCartOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  AudioOutlined,
} from '@ant-design/icons'
import CCommerceLogo from '@/assets/images/CCommerceLogo.svg'

const { Header } = Layout

const AudioStyle = {
  color: '#000000',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
}

const HeaderContainer = styled(Header)`
  &&& {
    height: 70px;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #ff9e6d;
    color: #ffffff;
  }
`

const CustomModal = styled(Modal)`
  & > .ant-modal-content {
    border: 4px solid #000000;
  }

  & > .ant-modal-content > .ant-modal-header,
  & > .ant-modal-content > .ant-modal-body,
  & > .ant-modal-content > .ant-modal-footer {
    background: #ffc759;
    border-bottom: 0px;
  }
`

const HeaderDefault = () => {
  const microphoneRef = useRef(null)
  const { handleListing, toogleListening, transcript, active } =
    React.useContext(VoiceContext)
  const voiceHandleListing = React.useCallback(() => {
    handleListing(microphoneRef)
  }, [handleListing])

  const voiceToogleListing = () => {
    toogleListening(microphoneRef)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  React.useEffect(() => {
    if (active) {
      voiceHandleListing()
    }
  }, [active, voiceHandleListing])

  return (
    <HeaderContainer>
      <Link href="/">
        <Image
          src={CCommerceLogo.src}
          width={171}
          height={70}
          style={{
            cursor: 'pointer',
          }}
          alt="ccommerce-logo"
        />
      </Link>
      <Space align="center">
        <Search />
        <AudioOutlined
          style={AudioStyle}
          ref={microphoneRef}
          onClick={voiceToogleListing}
        />
      </Space>
      <Space align="end">
        <Row gutter={32}>
          <Col>
            <Link href="/cart">
              <ShoppingCartOutlined style={AudioStyle} />
            </Link>
          </Col>
          <Col>
            <QuestionCircleOutlined
              style={AudioStyle}
              onClick={showModal}
              id="ccommerce-help"
            />
          </Col>
          <Col>
            <Link href="/user/history">
              <UserOutlined
                style={{
                  ...AudioStyle,
                  padding: '2px',
                  border: '3px solid #000000',
                  borderRadius: '50%',
                }}
              />
            </Link>
          </Col>
        </Row>
      </Space>
      <CustomModal
        className="helpme-ccommerce-modal"
        title="AYUDA"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        Para realizar la b??squeda de un determinado producto:
        <h2>INICIO</h2>
        <ul>
          <li>
            1! Activa el bot??n del micr??fono ubicado en la barra de b??squeda y
            da permisos para usar el micr??fono. Comprueba que el ??cono se vea de
            color verde.
          </li>
          <li>
            2! Puedes ver los productos de cada categor??a simplemente diciendo:
            <b>Ir a la categor??a N</b>, donde N es un n??mero ubicado frente a
            cada categor??a.
          </li>
          <li>
            3! Puedes seleccionar un producto de Oferta o Recomendaciones
            simplemente diciendo <b> Seleccionar OFERTA/RECOMENDACI??N N</b>, donde 
            <b>N</b>
             es n??mero identificador del producto en su ??rea.
          </li>
        </ul>
        <h2>TIENDA</h2>
        <ul>
          <li>
            1! Puedes decir <b>VER N</b>, donde N es el producto mostrado en
            pantalla.
          </li>
          <li>
            2! Puedes a??adir productos directamente al carrito al decir
            <b>A??adir producto N al carrito</b>, donde N es el producto mostrado
            en pantalla.
          </li>
        </ul>
        <h2>PRODUCTO</h2>
        <ul>
          <li>
            1! Puedes decir <b>A??ADIR AL CARRITO</b> para a??adir el producto con
            la cantidad elegida al carrito de compras.
          </li>
          <li>
            2! Puedes decir <b>COMPRAR AHORA</b> para pasar directamente al
            resumen de compra con el producto en pantalla.
          </li>
          <li>
            3! Puedes decir <b>A??ADE/QUITA 1</b> para a??adir o quitar en 1 la
            cantidad del producto.
          </li>
        </ul>

        Puedes salir de la ayuda diciendo <b>CERRAR AYUDA</b>
      </CustomModal>
    </HeaderContainer>
  )
}

export default HeaderDefault
