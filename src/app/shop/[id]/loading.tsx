import Container from "@/components/layout/Container"
import Spinner from "@/components/ui/Spinner";

const Loading = () => {
    return (
        <Container className="grid place-content-center min-h-40">
            <Spinner />
        </Container>
    )
}

export default Loading;