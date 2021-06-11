import styled, { keyframes } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IThumbnail } from '../../../data/IProject'
import { GRID_GAP, GRID_WIDTH } from '../../../styles/GlobalStyles'
import { Tags } from '..'
import { useInView } from 'react-intersection-observer'

interface IThumbnailProps {
	data: IThumbnail
	hideTags?: boolean
	style?: React.CSSProperties
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { data, style, hideTags } = props
	const link = data.file ? data.file.source : `/page/${data.header.toLowerCase().replace(/ /g, '-')}`
	const thumbnailStyle: React.CSSProperties = !data.thumbnail ? { pointerEvents: 'none' } : {}

	const [ref, inView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<ThumbnailContainer ref={ref} style={{ ...thumbnailStyle, ...style }} aria-hidden={!data.thumbnail}>
			<ThumbnailLink to={link} tabIndex={!data.thumbnail ? -1 : undefined}>
				<ImageWrapper>{inView && data.thumbnail && <Image src={data.thumbnail} />}</ImageWrapper>
				<H3>{data.header}</H3>
			</ThumbnailLink>

			{data.tags && !hideTags && <Tags tags={data.tags} />}
		</ThumbnailContainer>
	)
}

export const AnimateIn = keyframes`
	from { opacity: 0;}
	to { opacity: 1; }
`

const ThumbnailContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: ${GRID_GAP / 2}px;
`

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 200px;
	width: ${GRID_WIDTH}px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.thumbnail};
	border: 3px solid transparent;
	background-clip: padding-box; // this should eliminate the need to have a border color (instead of transparent), but it is not hiding the background completely
	transition: border-color 100ms ease-in;
`
const Image = styled.img`
	height: 100%;
	opacity: 0;
	animation: 1s ease-out 0.5s ${AnimateIn};
	animation-fill-mode: forwards;
`

export const H3 = styled.h3`
	width: 100%;
	text-align: center;
	padding-top: 8px;
	font-size: 1em;
	font-family: 'Museo_Slab_500_2';
	transition: color 100ms ease-in;
`

const ThumbnailLink = styled(Link)`
	&:hover,
	&:focus {
		${ImageWrapper} {
			border-color: ${({ theme }) => theme.accent};
		}
		${H3} {
			color: ${({ theme }) => theme.accent};
		}
	}
`
