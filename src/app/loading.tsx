import Spinner from "@/components/blocks/Spinner";
import Container from "@/components/layout/Container"

const Loading = () => {
    return (
        <Container className="grid place-content-center min-h-40">
            <Spinner />
        </Container>
    )
}

export default Loading;