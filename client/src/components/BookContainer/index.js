import React from 'react'
import Card from '../Card'
import { Row } from '../Grid'
import ImageContainer from '../ImageContainer'
import ButtonContainer from '../ButtonContainer'
import './style.css'

function Book({
  id,
  title,
  description,
  thumbnail,
  subtitle,
  authors,
  handleSave,
  link,
  onClick,
  saved,
  handleDelete
}) {
  return (
    <>
      <Card>
        <ImageContainer thumbnail={thumbnail} />
        <Row styling='container align-item-center justify-content-center'>
          <div className='card-title text-center'>
            <Row styling='align-items-center justify-content-center text-center'>
              <h3 className='display-6 card-title mx-auto text-center display-block'>{title}</h3>
            </Row>
            {subtitle === undefined ? (
              <>
                <h4 className='card-subtitle mx-auto font-italic'>{authors}</h4>
              </>
            ) : (
              <>
                <div className='container'>
                  <h4 className='card-subtitle mx-auto'>{subtitle}</h4>
                </div>
                <div className='container my-2'>
                  <h4 className='card-subtitle text-center mx-auto'>{authors}</h4>
                </div>
              </>
            )}
            <div className='container mx-auto'>
              <p className='text-justify '>{description}</p>
            </div>
          </div>
        </Row>

        <Row styling='container justify-content-end pl-4'>
          <ButtonContainer
            link={link}
            onClick={onClick}
            handleSave={handleSave}
            saved={saved}
            delete={handleDelete}
            id={id}
          />
        </Row>
      </Card>
    </>
  )
}

export default Book
