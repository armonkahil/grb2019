import React from 'react'
import Card from '../Card'
import Row from '../Row'
import ImageContainer from '../ImageContainer'
import ButtonContainer from '../ButtonContainer'

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
      {description === "No Desc" ? (
        <>
          <Card saved={saved}>
            <Row spacing='row align-self-center d-flex justify-content-center'>
              <div className='col-4'>
                <ImageContainer thumbnail={thumbnail} />
              </div>
              <div className='col-3'>
                <div className='media-title text-left'>
                  <h2 className='display-6'>{title}</h2>
                  {subtitle === undefined ? (
                    <>
                      <h5>Written By {authors}</h5>
                    </>
                  ) : (
                    <>
                      <h4>{subtitle}</h4>

                      <h4>Written By {authors}</h4>
                    </>
                  )}
                </div>
              </div>
              <div className='col-2'>
                <ButtonContainer
                  link={link}
                  onClick={onClick}
                  handleSave={handleSave}
                  saved={saved}
                  delete={handleDelete}
                  id={id}
                />
              </div>
            </Row>
          </Card>
        </>
      ) : (
        <>
          <Card>
            <Row spacing='row container-fluid justify-content-between pl-4'>
              <div className='media-title text-left'>
                <h6 className='display-6'>{title}</h6>
                {subtitle === undefined ? (
                  <>
                    <small>Written By {authors}</small>
                  </>
                ) : (
                  <>
                    <small>{subtitle}</small>
                    <br></br>
                    <small>written By {authors}</small>
                  </>
                )}
              </div>
              <ButtonContainer
                link={link}
                onClick={onClick}
                handleSave={handleSave}
                saved={saved}
                delete={handleDelete}
                id={id}
              />
            </Row>
            <div className='card border-light mb-3'>
              <Row>
                <ImageContainer thumbnail={thumbnail} />

                <div className='col'>
                  <div className='card-body overflow-auto'>
                    <p className='card-text overflow-auto text-justify'>
                      {description}
                    </p>
                  </div>
                </div>
              </Row>
            </div>
          </Card>
        </>
      )}
    </>
  )
}

export default Book
