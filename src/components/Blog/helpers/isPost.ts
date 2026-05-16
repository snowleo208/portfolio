import type { PostProps } from '../Post';
import { hasStringProperty } from './hasStringProperty';

export const isPost = (value: unknown): value is PostProps => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return hasStringProperty(value, 'title')
    && hasStringProperty(value, 'description')
    && hasStringProperty(value, 'readable_publish_date')
    && hasStringProperty(value, 'url')
    && hasStringProperty(value, 'cover_image')
    && hasStringProperty(value, 'created_at');
}
