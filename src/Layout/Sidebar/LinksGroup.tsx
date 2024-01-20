'use client'

import { Box, Collapse, Group, ThemeIcon, UnstyledButton, rem } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'

import classes from './LinksGroup.module.css'

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; value: string }[]
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const items = (hasLinks ? links : []).map(value => {
    return (
      <Link className={classes.value} href={value.value} key={value.label}>
        {value.label}
      </Link>
    )
  })

  return (
    <>
      <UnstyledButton onClick={() => setOpened(o => !o)} className={classes.control}>
        <Group justify="space-between" gap={2}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon style={{ width: rem(18), height: rem(18) }} />
            </ThemeIcon>
            <Box ml="md">{label}</Box>
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'rotate(90deg)',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

export function SidebarLinksGroup(data: any) {
  return (
    <Box p="md">
      <LinksGroup {...data} />
    </Box>
  )
}
