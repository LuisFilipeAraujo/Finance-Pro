import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Finance Pro — Clareza para a sua vida financeira';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const icon = await readFile(join(process.cwd(), 'app/icon.png'));
  const iconSrc = `data:image/png;base64,${icon.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#f7f8f6',
          borderBottom: '16px solid #1b6b4a',
          color: '#191f1d',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={84} height={84} alt="" style={{ borderRadius: 16 }} />
          <div style={{ display: 'flex', fontSize: 44, fontWeight: 600 }}>
            finance&nbsp;<span style={{ color: '#1b6b4a' }}>pro</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
            Sua vida financeira, organizada com clareza.
          </div>
          <div style={{ fontSize: 30, color: '#3d4448', maxWidth: 880 }}>
            Gastos organizados, padrões revelados e um plano para o que vem a seguir.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
