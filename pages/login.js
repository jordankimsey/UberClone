import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';


const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
      <Wrapper>
        <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
        <Title>Login to access your account</Title>
        <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
        <SigninButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SigninButton>
      </Wrapper>
    );
}

export default Login;

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`;
const SigninButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full
`

const UberLogo = tw.img`
    h-14 w-auto object-contain self-start
`
const Title = tw.div`
    text-3xl pt-4 text-gray-500
`

const HeadImage = tw.img`
    object-contain w-full
`