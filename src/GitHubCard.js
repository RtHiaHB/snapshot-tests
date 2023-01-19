import Card from 'react-bootstrap/Card'

function GitHubCard() {
    return (
        <div>
            <Card style={{ width: '20rem'}}>
                <Card.Img variant='top' src='https://avatars.githubusercontent.com/u/4576650?v=4' />
                <Card.Body>
                    <Card.Title style={{color:'black'}}>Thomas Davidson</Card.Title>
                    <Card.Link href='https://github.com/RtHiaHB'>Tom's GitHub Profile</Card.Link>
                    <Card.Text style={{color:'black'}}>
                        I once shot an elephant in my pajamas.  How he got in my pajamas, I don't know.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard