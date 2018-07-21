//bikin static componenet
//panggil via api
//yang mau ditampilin sumber berita
import "semantic-ui-css/semantic.min.css";
import React from "react";
import axios from "axios";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
const key = "147be71b816f45e083559909ca13cfbe";
const source =
  "https://newsapi.org/v2/sources?apiKey=147be71b816f45e083559909ca13cfbe";
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
      console.log(result, "ini sukses");
      this.setState({
        data: result.data.sources,
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
          <Image
            src={
              article.UrlToImage
                ? article.UrlToImage
                : `${dariSemantic}/images/wireframe/short-paragraph.png`
            }
          />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }
    return (
      <Card.Group>
        {data.map(source => {
          return (
            <Card key={source.id}>
              <Card.Content>
                <Image size="small" src={`${iconLocator}&url=${source.url}`} />
                <Card.Description>{source.name}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}
export default SourceList;
