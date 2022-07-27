import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftArrowClicked = () => {
    const {count} = this.state
    let value = count
    value -= 1
    if (value <= -1) {
      this.setState({count: 0})
    } else {
      this.setState({count: value})
    }
  }

  rightArrowClicked = () => {
    const {count} = this.state
    let value = count
    value += 1
    if (value <= 3) {
      this.setState({count: value})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="review">Reviews</h1>
        <img
          src={reviewsList[count].imgUrl}
          alt={reviewsList[count].username}
        />
        <div className="box">
          <button testid="leftArrow" type="button" className="btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
              onClick={this.leftArrowClicked}
            />
          </button>

          <p>{reviewsList[count].username}</p>

          <button className="btn" testid="rightArrow" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
              onClick={this.rightArrowClicked}
            />
          </button>
        </div>
        <p className="company">{reviewsList[count].companyName}</p>
        <p className="review">{reviewsList[count].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
