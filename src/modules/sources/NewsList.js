//bikin static componenet
//panggil via api
//yang mau ditampilin sumber berita
import "semantic-ui-css/semantic.min.css";
import React from "react";
import axios from "axios";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
const key = "147be71b816f45e083559909ca13cfbe";
const source =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=147be71b816f45e083559909ca13cfbe";
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class SourceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loadng: true,
      error: null
    };
  }
  componentDidMount() {
    axios.get(source).then(result => {
      this.setState({
        data: result.data.articles,
        loading: false
      });
    });
  }
  render() {
    const { data, loading, error } = this.state;
    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }
    return (
      <Card.Group>
        {data.map(source => {
          console.log(source.urlToImage);
          return (
            <Card key={source.id}>
              <Card.Content>
                <Image
                  src={
                    source.urlToImage
                      ? source.urlToImage
                      : `${dariSemantic}/images/avatar/large/matthew.png`
                  }
                />

                <Card.Description>{source.title}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}
export default SourceList;
