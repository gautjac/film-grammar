import type { Concept } from '../types'
import { DepthOfFieldDiagram } from '../diagrams/DepthOfFieldDiagram'

export const depthOfField: Concept = {
  id: 'depth-of-field',
  title: 'Depth of Field & Focus',
  family: 'Lensing & Optics',
  tags: ['fiction', 'documentary'],
  blurb: 'How much of a scene is sharp at once — and how shifting that sharpness inside a shot moves the audience\'s attention without a cut.',
  prose: (
    <>
      <p>
        Depth of field is the range of distance from the camera that appears acceptably sharp in the frame. <strong>Shallow</strong> depth of field keeps a narrow slice in focus and renders everything else as soft blur; <strong>deep</strong> depth of field keeps the whole scene sharp from foreground to background. Three things control it: aperture (the most direct lever), focal length (longer lenses produce shallower DOF), and subject distance (closer subjects produce shallower DOF).
      </p>
      <p>
        Aperture is measured in <em>f-stops</em>. Counter-intuitively, lower f-numbers mean wider apertures and shallower DOF: f/1.4 isolates a single eyelash; f/16 keeps everything from a coffee cup to a distant mountain in focus. Narrative fiction tends to favour shallow DOF for subject isolation and the painterly out-of-focus quality called <strong>bokeh</strong>. Observational documentary often uses deep DOF so a moving subject doesn't slip out of focus.
      </p>
      <p>
        <strong>Rack focus</strong> (or focus pull) is what you do with depth of field over time: shifting the focus plane during a single shot to move the audience's attention from one subject to another without cutting. A character in the foreground holds the eye; then the focus slips back to a face arriving in the doorway, and the story relocates. On fiction shoots a dedicated focus puller — first AC — manages this in real time; on documentary shoots the operator or autofocus does the work, with varying success.
      </p>
    </>
  ),
  diagram: <DepthOfFieldDiagram />,
  cards: [
    {
      id: 'dof-definition',
      conceptId: 'depth-of-field',
      kind: 'recall',
      front: <>What is <strong>depth of field</strong>?</>,
      back: <>The range of distance from the camera that appears acceptably sharp in the frame. Shallow DOF means a narrow slice in focus; deep DOF means most of the scene sharp.</>,
    },
    {
      id: 'dof-controls',
      conceptId: 'depth-of-field',
      kind: 'recall',
      front: <>What three things control depth of field?</>,
      back: <>Aperture (most direct — wider opens shallow), focal length (longer is shallower), and subject distance (closer is shallower).</>,
    },
    {
      id: 'dof-fstop',
      conceptId: 'depth-of-field',
      kind: 'recall',
      front: <>What's the counter-intuitive thing about f-stops and depth of field?</>,
      back: <>Lower f-numbers mean wider apertures and shallower DOF. f/1.4 isolates a single plane; f/16 keeps everything from foreground to far background in focus.</>,
    },
    {
      id: 'dof-bokeh',
      conceptId: 'depth-of-field',
      kind: 'recall',
      front: <>What is <strong>bokeh</strong>?</>,
      back: <>The aesthetic quality of out-of-focus areas in a shot — typically the soft, painterly blur produced by shallow DOF. A stylistic element in narrative cinematography.</>,
    },
    {
      id: 'dof-rack-focus',
      conceptId: 'depth-of-field',
      kind: 'recall',
      front: <>What is a <strong>rack focus</strong> (focus pull) and what does it do for the viewer?</>,
      back: <>Shifting the focus plane during a single shot, typically from foreground to background or vice versa. Moves the audience's attention from one subject to another without cutting.</>,
    },
    {
      id: 'dof-fiction-vs-doc',
      conceptId: 'depth-of-field',
      kind: 'recall',
      front: <>Why does observational documentary often favour deep DOF while narrative fiction often favours shallow?</>,
      back: <>Deep DOF tolerates a moving subject without focus slipping — useful when you can't restage. Shallow DOF isolates the subject and produces bokeh, used for stylistic and emotional emphasis in fiction.</>,
    },
  ],
}
