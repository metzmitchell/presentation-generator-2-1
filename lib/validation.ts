/**
 * Data Validation Helpers
 * 
 * Runtime validation for chart data, metrics, and other component props
 * to ensure graceful degradation when data is invalid.
 */

import { ChartData, MetricData, TimelineItem } from './types';

// Validation result interface
export interface ValidationResult<T> {
  valid: boolean;
  data?: T;
  errors: string[];
}

/**
 * Validates chart data format
 * Ensures data follows {name: string, value: number}[] format
 */
export function validateChartData(data: any): ValidationResult<ChartData[]> {
  const errors: string[] = [];
  
  if (!Array.isArray(data)) {
    return {
      valid: false,
      errors: ['Chart data must be an array']
    };
  }

  if (data.length === 0) {
    return {
      valid: false,
      errors: ['Chart data cannot be empty']
    };
  }

  const validatedData: ChartData[] = [];

  data.forEach((item, index) => {
    if (!item || typeof item !== 'object') {
      errors.push(`Item at index ${index} must be an object`);
      return;
    }

    if (typeof item.name !== 'string') {
      errors.push(`Item at index ${index} must have a 'name' property of type string`);
      return;
    }

    if (typeof item.value !== 'number' || !isFinite(item.value)) {
      errors.push(`Item at index ${index} must have a 'value' property of type number`);
      return;
    }

    validatedData.push({
      name: item.name,
      value: item.value
    });
  });

  return {
    valid: errors.length === 0,
    data: validatedData,
    errors
  };
}

/**
 * Validates metric data format
 * Ensures data follows MetricData interface
 */
export function validateMetricData(data: any): ValidationResult<MetricData[]> {
  const errors: string[] = [];
  
  if (!Array.isArray(data)) {
    return {
      valid: false,
      errors: ['Metric data must be an array']
    };
  }

  if (data.length === 0) {
    return {
      valid: false,
      errors: ['Metric data cannot be empty']
    };
  }

  const validatedData: MetricData[] = [];

  data.forEach((item, index) => {
    if (!item || typeof item !== 'object') {
      errors.push(`Metric at index ${index} must be an object`);
      return;
    }

    if (typeof item.label !== 'string') {
      errors.push(`Metric at index ${index} must have a 'label' property of type string`);
      return;
    }

    if (typeof item.value !== 'number' || !isFinite(item.value)) {
      errors.push(`Metric at index ${index} must have a 'value' property of type number`);
      return;
    }

    const metric: MetricData = {
      label: item.label,
      value: item.value
    };

    // Optional unit validation
    if (item.unit !== undefined) {
      if (typeof item.unit !== 'string') {
        errors.push(`Metric at index ${index} 'unit' must be a string if provided`);
        return;
      }
      metric.unit = item.unit;
    }

    // Optional change validation
    if (item.change !== undefined) {
      if (typeof item.change !== 'number' || !isFinite(item.change)) {
        errors.push(`Metric at index ${index} 'change' must be a number if provided`);
        return;
      }
      metric.change = item.change;
    }

    validatedData.push(metric);
  });

  return {
    valid: errors.length === 0,
    data: validatedData,
    errors
  };
}

/**
 * Validates timeline data format
 */
export function validateTimelineData(data: any): ValidationResult<TimelineItem[]> {
  const errors: string[] = [];
  
  if (!Array.isArray(data)) {
    return {
      valid: false,
      errors: ['Timeline data must be an array']
    };
  }

  if (data.length === 0) {
    return {
      valid: false,
      errors: ['Timeline data cannot be empty']
    };
  }

  const validatedData: TimelineItem[] = [];

  data.forEach((item, index) => {
    if (!item || typeof item !== 'object') {
      errors.push(`Timeline item at index ${index} must be an object`);
      return;
    }

    if (typeof item.title !== 'string') {
      errors.push(`Timeline item at index ${index} must have a 'title' property of type string`);
      return;
    }

    const timelineItem: TimelineItem = {
      title: item.title
    };

    // Optional description validation
    if (item.description !== undefined) {
      if (typeof item.description !== 'string') {
        errors.push(`Timeline item at index ${index} 'description' must be a string if provided`);
        return;
      }
      timelineItem.description = item.description;
    }

    // Optional date validation
    if (item.date !== undefined) {
      if (typeof item.date !== 'string') {
        errors.push(`Timeline item at index ${index} 'date' must be a string if provided`);
        return;
      }
      timelineItem.date = item.date;
    }

    // Optional status validation
    if (item.status !== undefined) {
      const validStatuses = ['completed', 'current', 'upcoming'];
      if (!validStatuses.includes(item.status)) {
        errors.push(`Timeline item at index ${index} 'status' must be one of: ${validStatuses.join(', ')}`);
        return;
      }
      timelineItem.status = item.status as 'completed' | 'current' | 'upcoming';
    }

    validatedData.push(timelineItem);
  });

  return {
    valid: errors.length === 0,
    data: validatedData,
    errors
  };
}

/**
 * Validates image gallery data format
 */
export function validateImageData(data: any): ValidationResult<Array<{src: string; alt: string; caption?: string}>> {
  const errors: string[] = [];
  
  if (!Array.isArray(data)) {
    return {
      valid: false,
      errors: ['Image data must be an array']
    };
  }

  if (data.length === 0) {
    return {
      valid: false,
      errors: ['Image data cannot be empty']
    };
  }

  const validatedData: Array<{src: string; alt: string; caption?: string}> = [];

  data.forEach((item, index) => {
    if (!item || typeof item !== 'object') {
      errors.push(`Image at index ${index} must be an object`);
      return;
    }

    if (typeof item.src !== 'string') {
      errors.push(`Image at index ${index} must have a 'src' property of type string`);
      return;
    }

    if (typeof item.alt !== 'string') {
      errors.push(`Image at index ${index} must have an 'alt' property of type string`);
      return;
    }

    const image = {
      src: item.src,
      alt: item.alt,
      caption: item.caption
    };

    // Optional caption validation
    if (item.caption !== undefined && typeof item.caption !== 'string') {
      errors.push(`Image at index ${index} 'caption' must be a string if provided`);
      return;
    }

    validatedData.push(image);
  });

  return {
    valid: errors.length === 0,
    data: validatedData,
    errors
  };
}

/**
 * Creates safe fallback data for charts when validation fails
 */
export function createChartFallback(type: string): ChartData[] {
  const fallbacks = {
    bar: [
      { name: 'Data', value: 0 }
    ],
    line: [
      { name: 'Start', value: 0 },
      { name: 'End', value: 0 }
    ],
    pie: [
      { name: 'No Data', value: 100 }
    ],
    area: [
      { name: 'Start', value: 0 },
      { name: 'End', value: 0 }
    ],
    scatter: [
      { name: 'Point', value: 0 }
    ]
  };

  return fallbacks[type as keyof typeof fallbacks] || fallbacks.bar;
}

/**
 * Creates safe fallback data for metrics when validation fails
 */
export function createMetricsFallback(): MetricData[] {
  return [
    {
      label: 'Data Unavailable',
      value: 0,
      unit: '',
      change: 0
    }
  ];
}

/**
 * Validates common component props
 */
export function validateLayout(layout: any): string {
  const validLayouts = ['full-width', 'centered', 'sidebar', 'text-chart', 'grid'];
  return validLayouts.includes(layout) ? layout : 'centered';
}

export function validateEmphasis(emphasis: any): string {
  const validEmphasis = ['highlight', 'callout', 'success', 'warning', 'subtle'];
  return validEmphasis.includes(emphasis) ? emphasis : 'callout';
}

export function validateChartType(type: any): string {
  const validTypes = ['bar', 'line', 'pie', 'area', 'scatter'];
  return validTypes.includes(type) ? type : 'bar';
}

export function validateColorScheme(scheme: any): string {
  const validSchemes = ['primary', 'success', 'warning', 'error'];
  return validSchemes.includes(scheme) ? scheme : 'primary';
}