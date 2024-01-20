import logoDark from '@/src/assets/dark_logo.png'
import logoWhite from '@/src/assets/white_logo.png'
import classes from '@/src/Layout/logo/Logo.module.css'
import { Flex, FlexProps, useMantineColorScheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface LogoProps extends FlexProps {
  height?: number
  width?: number
  alt?: string
}

export function Logo({ height = 40, width = 100, alt = 'logo', ...rest }: LogoProps) {
  const mobile = useMediaQuery('(max-width: 36em)')
  const { colorScheme } = useMantineColorScheme()
  const { push } = useRouter()
  return (
    <Flex align="center" justify="center" {...rest} onClick={() => push('/home')} className={classes.logo}>
      <Image
        src={colorScheme === 'dark' ? logoDark : logoWhite}
        alt={alt}
        width={mobile ? 60 : width}
        height={mobile ? 25 : height}
      />
    </Flex>
  )
}
